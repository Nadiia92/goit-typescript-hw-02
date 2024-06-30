/** @format */

import {Field, Form, Formik} from "formik";
import {BsSearch} from "react-icons/bs";
import style from "./SearchBar.module.css";

const SearchBar = ({onSearch}) => {
  return (
    <header className={style.header}>
      <Formik
        initialValues={{query: ""}}
        onSubmit={(values, actions) => {
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
