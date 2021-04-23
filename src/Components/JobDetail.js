import { Field } from "formik";

function JobDetail() {
  return (
    <div>
      <Field type="text" name="jobName" placeholder="Job Name" />
      <Field type="text" name="jobAddress" placeholder="Job Address" />
    </div>
  );
}
export default JobDetail;
