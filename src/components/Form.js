import React, { useState } from "react";
//import {Formik} from "formik";

const Form = ({ camera }) => {
  const [formData, setFormData] = useState({
    userName: {
      value: "",
      err: function() {
        return this.value.length < 10 || !/^[a-z A-Z-]+$/.test(this.value) || this.value.length > 20
      }
    },
    brandName: {
      value: "",
      err: null,
    },
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: {
        ...formData[e.target.name],
        value: e.target.value
      }
    });
  }

  return (
    <div className="form-wrapper">
      <form className="form">
        <header className="form-header">Become a photographer.</header>
        <label className="block mt-4 mb-2">Name</label>

        <input name="userName" className={`input-text ${formData.userName.err() ? 'border-red-500': ''}`} value={formData.userName.value} type="text" onChange={handleChange}/>
        <p className="text-red-500">{formData.userName.err() ? "Invalid input, please try again.": ""}</p>

        <label className="block mt-4 mb-2">Camera Brand</label>
        <select name="brandName" onChange={handleChange} className="border border-black rounded px-3 py-1">
          <option selected={true} disabled>
            Please select a camera
          </option>
          {camera.map((camera, idx) => (
            <option value={camera} key={idx}>
              {camera}
            </option>
          ))}
        </select>
        <p>{formData.brandName.value}</p>
      </form>

      {/*<Formik*/}
      {/*  initialValues={{ email: '', password: '' }}*/}
      {/*  validate={values => {*/}
      {/*    const errors = {};*/}
      {/*    if (!values.email) {*/}
      {/*      errors.email = 'Required';*/}
      {/*    } else if (*/}
      {/*      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)*/}
      {/*    ) {*/}
      {/*      errors.email = 'Invalid email address';*/}
      {/*    }*/}
      {/*    return errors;*/}
      {/*  }}*/}
      {/*  onSubmit={(values, { setSubmitting }) => {*/}
      {/*    setTimeout(() => {*/}
      {/*      alert(JSON.stringify(values, null, 2));*/}
      {/*      setSubmitting(false);*/}
      {/*    }, 400);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  {({*/}
      {/*      values,*/}
      {/*      errors,*/}
      {/*      touched,*/}
      {/*      handleChange,*/}
      {/*      handleBlur,*/}
      {/*      handleSubmit,*/}
      {/*      isSubmitting,*/}
      {/*      /* and other goodies */}
      {/*    }) => (*/}
      {/*    <form className="pt-20" onSubmit={handleSubmit}>*/}
      {/*      <input*/}
      {/*        className="border border-black p-4 block"*/}
      {/*        type="email"*/}
      {/*        name="email"*/}
      {/*        onChange={handleChange}*/}
      {/*        onBlur={handleBlur}*/}
      {/*        value={values.email}*/}
      {/*      />*/}
      {/*      {errors.email && touched.email && errors.email}*/}
      {/*      <input className="border border-black p-4 block"*/}
      {/*             type="password"*/}
      {/*        name="password"*/}
      {/*        onChange={handleChange}*/}
      {/*        onBlur={handleBlur}*/}
      {/*        value={values.password}*/}
      {/*      />*/}
      {/*      {errors.password && touched.password && errors.password}*/}
      {/*      <button type="submit" disabled={isSubmitting}>*/}
      {/*        Submit*/}
      {/*      </button>*/}
      {/*    </form>*/}
      {/*  )}*/}
      {/*</Formik>*/}
    </div>
  );
};
export default Form;
