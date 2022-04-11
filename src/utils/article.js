import { api } from "api";
import { NewsContentType } from "constants/enums";
import { isFileInstanse } from "utils/parsers/file";

const needToUpdate = ({ oldItem, newItem }) => {
  if (oldItem.data?.order !== newItem.data?.order) {
    return true;
  }

  switch (newItem.type) {
    case NewsContentType.Text: {
      return (
        oldItem.data?.textHeading !== newItem.data?.textHeading ||
        oldItem.data?.textDescription !== newItem.data?.textDescription
      );
    }

    case NewsContentType.Image: {
      const { lessonImg, photoDescription } = newItem.data || {};

      if (lessonImg && isFileInstanse(lessonImg)) {
        return true;
      }

      if (photoDescription !== oldItem.data?.photoDescription) {
        return true;
      }

      return false;
    }

    case NewsContentType.Video: {
      const { videoResource, videoLink, videoTitle, videoDescription } =
        newItem.data || {};

      if (videoResource && isFileInstanse(videoResource)) {
        return true;
      }

      if (videoLink && oldItem.data?.videoLink !== videoLink) {
        return true;
      }

      if (videoTitle !== oldItem.data?.videoTitle) {
        return true;
      }

      if (videoDescription !== oldItem.data?.videoDescription) {
        return true;
      }

      return false;
    }

    default:
      return false;
  }
};

export const getActionLists = (oldContent, newContent) => {
  const editList = [];
  const deleteList = [];
  const createList = [];

  oldContent.forEach((item) => {
    const isExists = newContent.find(
      (element) => element.data?.id === item.data?.id
    );
    if (!isExists) deleteList.push(item);
  });

  newContent.forEach((item, index) => {
    if (!item.data.id) {
      createList.push({ ...item, data: { ...item.data, order: index + 1 } });
      return;
    }

    const oldElementIndex = oldContent.findIndex(
      (element) => element.data?.id === item.data?.id
    );

    if (oldElementIndex >= 0) {
      const oldItem = oldContent[oldElementIndex];
      const newItem = { ...item, data: { ...item.data, order: index + 1 } };
      const needUpdate = needToUpdate({ oldItem, newItem });
      if (needUpdate) editList.push(newItem);
    }
  });

  return { editList, deleteList, createList };
};

export const getPromises = ({
  richTextId,
  editList = [],
  deleteList = [],
  createList = [],
}) => {
  const promises = [];

  const createTextPayload = (data) => ({
    id: data.id,
    order: data.order,
    title: data.textHeading,
    text: data.textDescription,
    richTextId: data.richTextId,
  });

  const createImagePayload = (data) => ({
    id: data.id,
    order: data.order,
    file: data.lessonImg,
    richTextId: data.richTextId,
    description: data.photoDescription,
  });

  const createVideoPayload = (data) => ({
    id: data.id,
    order: data.order,
    link: data.videoLink,
    file: data.videoResource,
    richTextId: data.richTextId,
    title: data.videoTitle || "",
    description: data.videoDescription || "",
  });

  const payload = {
    [NewsContentType.Text]: createTextPayload,
    [NewsContentType.Image]: createImagePayload,
    [NewsContentType.Video]: createVideoPayload,
  };

  const deleteRequest = {
    [NewsContentType.Text]: api.news.deleteTextBlock,
    [NewsContentType.Image]: api.news.deleteImageBlock,
    [NewsContentType.Video]: api.news.deleteVideoBlock,
  };

  const editRequest = {
    [NewsContentType.Text]: api.news.updateTextBlock,
    [NewsContentType.Image]: api.news.updateImageBlock,
    [NewsContentType.Video]: api.news.updateVideoBlock,
  };

  const createRequest = {
    [NewsContentType.Text]: api.news.createTextBlock,
    [NewsContentType.Image]: api.news.createImageBlock,
    [NewsContentType.Video]: api.news.createVideoBlock,
  };

  editList.forEach((item) => {
    const request = editRequest[item.type];
    const payloadWithData = payload[item.type](item.data);

    const promise = request(payloadWithData);
    promises.push(promise);
  });

  deleteList.forEach((item) => {
    const request = deleteRequest[item.type];
    const payloadWithData = payload[item.type](item.data);

    const promise = request(payloadWithData);
    promises.push(promise);
  });

  createList.forEach((item) => {
    const request = createRequest[item.type];
    const payloadWithData = payload[item.type]({
      ...item.data,
      richTextId,
    });

    const promise = request(payloadWithData);
    promises.push(promise);
  });

  return promises;
};
