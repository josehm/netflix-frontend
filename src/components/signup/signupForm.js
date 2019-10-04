import React from 'react';
import { Formik } from 'formik';
import Dropzone from 'react-dropzone';

class SignupForm extends React.Component {
  state = {
    data: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      profileImage: '',
      gender: 'Hombre'
    },
    previewImage: '',
  }

  onDrop = (acceptedFiles) => {
    console.log("TCL: SignupForm -> onDrop -> acceptedFiles", acceptedFiles)
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        const binaryString = reader.result;
        console.log("TCL: SignupForm -> reader.onload -> binaryString", binaryString)
        this.setState({
          ...this.state,
          data: {
            ...this.state.data,
            profileImage: file,
          },
          previewImage: binaryString,
        })
      }
      reader.onabort = () => console.log('hubo un error al leer el archivo');
      reader.onerror = () => console.log('hubo un error al leer el archivo');
      reader.readAsDataURL(file)
    })
  }

  render() {
    const { handleFormSubmit } = this.props;
    return (
      <div>
        <div>
          Signup
          <Formik
            initialValues={{
              name: '',
              lastName: '',
              email: '',
              password: '',
              gender: 'Hombre'
            }}
            validate={values => {
              let errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("TCL: SignupForm -> render -> values", values)

              setTimeout(() => {
                this.setState({
                  ...this.state,
                  data: {
                    ...values,
                    profileImage: this.state.data.profileImage,
                  }
                }, () => handleFormSubmit(this.state.data))
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
                  Name<input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <hr />
                  lastName: <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  <hr />
                  gender: <select name="gender" 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    value={values.gender}
                    >
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                  </select>
                  <hr />
                  email <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <hr />
                  password<input
                    type="text"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                  <hr />
                  imagen
                  <Dropzone onDrop={this.onDrop}>
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                  <img src={this.state.previewImage} alt="" />
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default SignupForm;