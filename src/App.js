import React, { useState } from "react";

import FormPage from "./FormPage";

function App() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <div className="App">
      <FormPage
        page={page}
        setPage={setPage}
        formData={formData}
        setFormData={setFormData}
      />
      {/* Display submitted form data */}
      <div>
        <h2>Submitted Form:</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
