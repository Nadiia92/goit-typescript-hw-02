/** @format */

import {Field, Form, Formik, FormikHelpers} from "formik";
import {BsSearch} from "react-icons/bs";
import style from "./SearchBar.module.css";
import {FC} from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({onSearch}) => {
  return (
    <header className={style.header}>
      <Formik
        initialValues={{query: ""}}
        onSubmit={(
          values: {query: string},
          actions: FormikHelpers<{query: string}>
        ) => {
          onSearch(values.query);
          actions.resetForm();
        }}>
        <Form className={style.container}>
          <button className={style.btn} type="submit">
            <BsSearch className={style.icon} />
          </button>
          <Field
            className={style.field}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
