import { Field } from "formik";

function Survey() {
  return (
    <div>
      <div id="radio-group">Do you like your job ?</div>
      <div role="group" aria-labelledby="radio-group">
        <label>
          <Field type="radio" name="likeJob" value="yes" />
          YES
        </label>
        <label>
          <Field type="radio" name="likeJob" value="moreYes" />
          MORE YES
        </label>
      </div>
    </div>
  );
}
export default Survey;
