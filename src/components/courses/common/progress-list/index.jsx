import { useCallback, useMemo } from "react";

import { prepareProgressData } from "./helpers";
import { CourseProgressBar } from "../progress-bar";

import "./styles.scss";

export const ProgressList = ({
  children,
  list = [],
  withProgressBar = false,
}) => {
  const data = useMemo(() => {
    return list ? list.reduce(prepareProgressData, []) : [];
  }, [list]);

  const renderProgressBar = useCallback(
    (item, index) => {
      return (
        <CourseProgressBar
          withIndex
          withProgressLine
          index={index + 1}
          progress={item.progress}
          isLast={item.isLastItem}
          isFirst={item.isFirstItem}
          isCompleted={item.isCompleted}
          isPreviusCompleted={item.isPreviusCompleted}
        />
      );
    },
    [withProgressBar]
  );

  return (
    <div className="progress-list-container">
      {data.map((item, index) => {
        return (
          <div
            className="list-item-container"
            key={`lesson-${index.toString()}`}
          >
            {renderProgressBar(item, index)}
            {children && children(item, index)}
          </div>
        );
      })}
    </div>
  );
};

// export const ProgressList = ({ list = [], render }) => {
//   return (
//     <div className="progress-list-container">
//       {list.map((item, index) => (
//         <div key={`lesson-${item.id}`} className="list-item-container">
//           <CourseProgressBar
//             withIndex
//             withProgressLine
//             index={index + 1}
//             progress={item.progress}
//             isLast={item.isLastItem}
//             isFirst={item.isFirstItem}
//             isCompleted={item.isCompleted}
//             isPreviusCompleted={item.isPreviusCompleted}
//           />

//           {render && render(item, index)}
//         </div>
//       ))}
//     </div>
//   );
// };
