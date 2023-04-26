import './Booking.css';
import { Container } from 'react-bootstrap';
import { Formik, Form } from "formik";
import * as Yup from 'yup'
import FormikControl from './FormikControl';
import saveData from '../hooks/saveData';
import { Link, useNavigate } from 'react-router-dom';
function BookingForm({ submittedDate, pickedTime, submittedGuestN, goUp }) {
    
    const confirm = useNavigate();// to redirect to confirmation page
    //convert submittedDate to human standard
    const formatDate = submittedDate?new Date(submittedDate).toLocaleDateString():new Date().toLocaleDateString();

    const radioOptions = [
        {key: "yes", value: 'yes'},
        {key: "no", value: 'no'},
    ]
    const dropdownOptions = [
        {key: "Select an option", value: ''},
        {key: "Birthday", value: 'Birthday'},
        {key: "Anniversary",value: 'Anniversary'},
        {key: "Retirement", value: 'Retirement'},
        {key: "Other", value: 'Other'},
    ]

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        type: '',
        comment: '',
        reminder:'',
        //reminder: [],//<-check box in formik is an array so the initial value should be an empty array
    };
    const validationSchema = Yup.object({
        firstName: Yup.string().min(2, 'Too Short').max(50, 'Too long').required("required"),
        lastName: Yup.string().min(2, 'Too Short').max(50,'Too long').required("required"),
        email: Yup.string().email('invalid email').required(" required"),
        type: Yup.string().required("required"),
        comment: Yup.string().min(1, 'too short').required("If none, please write n/a"),
        //reminder: Yup.array().required("Selection required"),
    });
    const onSubmit = (values, onSubmitProps) => {
        console.log("Form values", values)
    
        //need to pass submitted data into sessionStorage
        const data = {
        date: formatDate,
        time: pickedTime,
        guestNum: submittedGuestN ,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        type: values.type,
        comment: values.comment,
        reminder: values.reminder, 
        }
        saveData('bookingData',data)
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        console.log("form submitted")

        confirm("/confirmation")
    }


/***functions above********/
    return (
        <Container fluid className={`bookForm ${goUp?"goUp":null}`}>
            <Container className='form-container'>
                <section className="search-detail-container">
                <h3>Details</h3>
                <span>Date : {formatDate}</span>
                <span>Time : {pickedTime}</span>
                <span>Guest # : {submittedGuestN}</span>
            </section>
            <p>
                <Link to="/registration">
                     <span>SIGN UP</span>    
                </Link>
                to receive discounts and weekly recipes
            </p>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnChange={true}
                validateOnBlur ={true}
            >
                {formik => {
                        return <Form>
                     
                        <FormikControl control="input" type="text" label="First Name" name="firstName" className=" input" />
                        
                        <FormikControl control="input" type="text" label="Last Name" name="lastName" className="input" />
                        
                        <FormikControl control="input" type="email" label="Email" name="email" className="input" />
                        
                        <FormikControl control="input" type="tel" label="Phone number (optional)" name="phone" className="input" />

                    <div className ="flex">
                        <FormikControl control="select" type="type" label="Special Occasions" name="type" options={dropdownOptions} className ="label2" />
                        
                        <FormikControl control="textarea" type="text" label="Instructions" name="comment" className ="label2"/>
                    
                        </div>
                        <div className="flex">
                             <FormikControl control="radio" label="Would you like a reminder?" name="reminder" options={radioOptions} className ="label2" />
                        </div>
                        <button type="submit" disabled={Formik.isSubmitting}> Submit</button>
                    </Form>
                }}
                </Formik>
            </Container>
        </Container>
    )
}

export default BookingForm;