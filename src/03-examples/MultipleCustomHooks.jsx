/* eslint-disable no-unused-vars */
import { useCounter } from "../hooks/useCouter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {

  const {counter,increment} = useCounter(1)
  const { data, isLoading, hasError } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes"
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Cargando...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer mt-1">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary">Next Quote</button>
    </>
  );
};
