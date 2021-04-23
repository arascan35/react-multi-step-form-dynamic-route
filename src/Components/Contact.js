import { Field } from "formik";

function Contact() {
  return (
    <div>
      <Field type="text" name="address" placeholder="Address" />
      <Field type="text" name="city" placeholder="City" />
    </div>
  );
}
export default Contact;
