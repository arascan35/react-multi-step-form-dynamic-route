import { Field } from "formik";

function SchoolDetail() {
  return (
    <div>
      <Field type="text" name="schoolName" placeholder="School Name" />
      <Field type="text" name="schoolAddress" placeholder="School Address" />
    </div>
  );
}
export default SchoolDetail;
