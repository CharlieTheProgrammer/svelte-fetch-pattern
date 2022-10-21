async function getErrors(schema: any, values: any) {
  let errors = {};
  try {
    await schema.validate(values, { abortEarly: false });
    // If validation passes, the return null
    return null;
  } catch (err) {
    errors = err.inner.reduce((acc: any, err: any) => {
      return { ...acc, [err.path]: err.message };
    }, {});
    return errors;
  }
}

const Utils = {getErrors};
export {Utils}