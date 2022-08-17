import React, { useState, useEffect } from "react";

function Login({ issubmit, setissubmit, entry, setEntry }) {
  let [error, setError] = useState([]);

  let [form, setForm] = useState({
    name: "",
    password: "",
  });

  let updateHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  let submitHandler = (event) => {
    event.preventDefault();
  };
  let addHandler = (event) => {
    setError(validate(form));

    if (Object.keys(error).length === 0) {
      setEntry([...entry, form]);
      setissubmit(true);
    }
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && issubmit) {
      console.log(form);
      setEntry([...entry, form]);
    }
  }, [error]);

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return (
    <div className="container mt-5">
      {JSON.stringify(form)}

      <div className="row d-flex">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header d-flex bg-info text-white">
              <h4 className="mx-auto ">Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label className="font-weight-bold">Username:</label>
                  <input
                    type="text"
                    placeholder="Enter the name"
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={updateHandler}
                    pattern="[a-zA-Z]+"
                    required
                  />
                </div>
                <p className="text-danger font-weight-bold">{error.name}</p>

                <div className="form-group">
                  <label className="font-weight-bold">Password:</label>
                  <input
                    type="password"
                    placeholder="Enter the password"
                    className="form-control"
                    name="password"
                    value={form.password}
                    onChange={updateHandler}
                  />
                </div>
                {form.password.length === 10 ? (
                  <p className="text-success font-weight-bold">Strong</p>
                ) : (
                  <p className="text-danger font-weight-bold">
                    {error.password}
                  </p>
                )}
                <div>
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-success"
                    onClick={addHandler}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
