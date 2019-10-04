import React from 'react';
import { Formik } from 'formik';

const LoginForm = ({ handleSubmit }) => (

    <div>
      <h4 className="text-light" >Inicia sesión</h4>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = "insetaun password"
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleSubmit(values)
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label for="emial" className="text-light" >Email o número de teléfono</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="form-control"
                />
                {errors.email && touched.email && errors.email}
              </div>

              <div className="form-group">
                <label for="password" className="text-light" >Contraseña</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="form-control"
                />
                {errors.password && touched.password && errors.password}
              </div>

              <button className="btn btn-danger" type="submit" disabled={isSubmitting}>
                Iniciar sesión
              </button>

            </form>
          )}
      </Formik>
    </div>

);

export default LoginForm;