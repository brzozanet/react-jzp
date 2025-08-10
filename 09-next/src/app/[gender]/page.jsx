import { GENDERS_TEXT_MAPPING } from "../constants/mapping";

export default function Gender({ params }) {
  return (
    <>
      <h2>{GENDERS_TEXT_MAPPING.get(params.gender)}</h2>
    </>
  );
}
