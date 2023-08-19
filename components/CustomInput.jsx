import React from "react";

const CustomInput = ({ component, label, name, handler, placeholder,autoComplete, extra_class, selectItemArray, step, type }) => {
  return (
    <>
      {component === "textarea" ? (
        <>
          {label && (
            <label className="font-semibold text-sm" htmlFor={name}>
              {label}
            </label>
          )}
          <textarea
            onChange={handler}
            rows={10}
            className={`formGlassInput ${extra_class}`}
            placeholder={placeholder}
            name={name}
          />
        </>
      ) : component === "select" ? (
        <>
          <select
            onChange={handler}
            className={`outline-none formGlassInput ${extra_class}`}
            name={name}
          >
            <option value={null}>Select {name}</option>
            {selectItemArray?.map((opt, i) => (
              <option key={i} value={opt.id}>
                {opt.name}
              </option>
            ))}
          </select>
        </>
      ) : (
        <>
          {label && (
            <label
              className="font-semibold text-sm"
              htmlFor={name}
            >
              {label}
            </label>
          )}
          <input
            onChange={handler}
            step={step}
            type={type}
            autoComplete={autoComplete}
            className={`formGlassInput ${extra_class} `}
            placeholder={placeholder}
            name={name}
          />
        </>
      )}
    </>
  );
};

export default CustomInput;
