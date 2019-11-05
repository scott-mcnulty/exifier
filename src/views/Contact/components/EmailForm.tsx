import React from 'react';
// import { connect } from 'react-redux';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

// import styles from '../styles/styles';
// import * as emailApiService from '../../../services/emailApiService';
// import {
//   showSnackBar,
//   sendContactEmailStart,
//   sendContactEmailSuccess,
//   sendContactEmailError,
// } from '../../../actions';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(4)
    }
}));

const EmailFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required!'),
  subject: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .required('Required!'),
  message: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .required('Required!'),
});

const EmailForm: React.FC = props => {
    const classes = useStyles(props);
    
    return (
        <Formik
    initialValues={{ email: '', subject: '', message: '' }}
    onSubmit={(values, { setSubmitting }) => {
      const { email, subject, message } = values;
      const emailPayload = {
        from: email,
        subject,
        content: message,
      };

    //   sendContactEmailStart();
    //   emailApiService.sendContactEmail(emailPayload)
    //     .then((response) => {
    //       sendContactEmailSuccess(response);
    //       showSnackBar({
    //         message: 'Email successfully sent!',
    //         variant: 'success',
    //       });
    //     })
    //     .catch((error) => {
    //       sendContactEmailError(error);
    //       showSnackBar({
    //         message: 'Could not send email',
    //         variant: 'error',
    //       });
    //     })
    //     .then(() => {
    //       setSubmitting(false);
    //     });
    }}
    validationSchema={EmailFormSchema}
  >
    {(props) => {
      const {
        // values,
        // touched,
        // errors,
        // dirty,
        isSubmitting,
        // handleChange,
        // handleBlur,
        handleSubmit,
        // handleReset,
      } = props;
      return (
        <form onSubmit={handleSubmit}>

          <Field
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            component={TextField}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <Field
            name="subject"
            label="Subject"
            placeholder="Enter email subject"
            component={TextField}
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <Field
            name="message"
            label="Message"
            placeholder="Enter email message"
            component={TextField}
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <Button
            color="primary"
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            fullWidth
          >
            Submit
          </Button>
        </form>
      );
    }}
  </Formik>
    )
}

export default EmailForm;
