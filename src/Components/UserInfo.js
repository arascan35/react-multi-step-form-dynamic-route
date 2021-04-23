import { Field } from "formik";
import { studentPath, workerPath, unemployedPath } from "./../Paths";

function UserInfo({ setSteps }) {
  return (
    <div>
      <Field type="text" name="firstName" placeholder="First Name" />
      <Field type="text" name="lastName" placeholder="Last Name" />
      <Field name="status">
        {({ form: { setFieldValue }, field, meta }) => (
          <select
            onChange={(e) => {
              if (e.target.value === "student") {
                setSteps(studentPath);
              } else if (e.target.value === "worker") {
                setSteps(workerPath);
              } else {
                setSteps(unemployedPath);
              }
              setFieldValue(field.name, e.target.value);
            }}
          >
            <option value="student">Student</option>
            <option value="worker">Worker</option>
            <option value="unemployed">Unemployed</option>
          </select>
        )}
      </Field>
    </div>
  );
}
export default UserInfo;
