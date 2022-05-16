import { useState } from "react";
import { Formik, Form, FieldArray, useField } from "formik";
import * as yup from "yup";

import { Icon } from "common/icon";
import { InputField } from "common/input";
import { Flex, TwoColumnsGrid } from "common/grids";

import { DashboardLayout } from "layout/dashboard";
import { ActionButton } from "common/buttons/action-button";

import "./styles.scss";
import { IconButton } from "common/buttons/icon-button";

const model = {
  title: { name: "title", label: "Title", placeholder: "Title" },

  questions: { name: "questions" },
};

const initialValues = {
  [model.title.name]: "",
  // [model.questions.name]: [],
};

const validationSchema = yup.object().shape({
  [model.title.name]: yup.string().required(),
  [model.questions.name]: yup.array().of(
    yup.object().shape({
      title: yup.string().required(),
      answers: yup.array().of(
        yup.object().shape({
          text: yup.string().required(),
          isCorrect: yup.boolean(),
        })
      ),
    })
  ),
});

const initialQuestion = {
  title: "",
  answers: [
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
  ],
};

const Answer = ({ name, index }) => {
  const [field, , helpers] = useField(name);

  const Title = { 0: "A", 1: "B", 2: "C", 3: "D" };

  return (
    <div className="answer-container">
      <div className="title-block">
        <h4>{Title[index]}</h4>
      </div>

      <InputField name={`${name}.text`} placeholder="Text" />

      <IconButton
        icon="checkmark"
        variant={`checkmark-${field.value.isCorrect ? "green" : "grey"}`}
        onClick={() =>
          helpers.setValue({
            ...field.value,
            isCorrect: !field.value.isCorrect,
          })
        }
      />
    </div>
  );
};

const Question = ({ name, title }) => {
  const [field] = useField(name);

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="question-container">
      <div
        className="header-container"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h4>{title}</h4>
        <Icon icon={`chevron-${isCollapsed ? "up" : "down"}`} />
      </div>

      <InputField name={`${name}.title`} placeholder="Text" />

      {field.value.answers.map((answer, i) => (
        <Answer
          index={i}
          name={`${name}.answers.${i}`}
          key={`answer-container-${i.toString()}`}
        />
      ))}
    </div>
  );
};

const Questions = ({ name, questions = [] }) => {
  return (
    <FieldArray name={model.questions.name}>
      {({ push }) => (
        <>
          {questions.map((question, index) => (
            <Question
              question={question}
              name={`${name}.${index}`}
              title={`Question ${index + 1}`}
              key={`test-question-${index.toString()}`}
            />
          ))}

          <ActionButton
            icon="plus"
            variant="secondary"
            title="Add Question"
            onClick={() => push(initialQuestion)}
          />
        </>
      )}
    </FieldArray>
  );
};

export const CreateTestPage = () => {
  const handleSubmit = () => {};

  return (
    <DashboardLayout title="Add New Test" withBackButton>
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form>
            <TwoColumnsGrid templateColumns="824px 1fr">
              <Flex direction="column" justify="flex-start" gap="40px">
                <InputField name={model.title.name} {...model.title} />

                <Questions
                  name={model.questions.name}
                  questions={values[model.questions.name]}
                />
              </Flex>
            </TwoColumnsGrid>
          </Form>
        )}
      </Formik>
    </DashboardLayout>
  );
};
