import { GENDERS_TEXT_MAPPING } from "../constants/mapping";

export default async function Gender({ params }) {
  const { gender } = await params;
  return (
    <>
      <h2>Ścieżka dynamiczna</h2>
      <h3>{GENDERS_TEXT_MAPPING.get(gender) || gender}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
        expedita pariatur eveniet voluptates nesciunt corporis, molestias dolor
        vero deleniti a obcaecati? Sequi quos a tempora quibusdam dolorum
        reiciendis quaerat libero, amet molestias quo animi nostrum assumenda
        itaque doloremque. Labore odio nemo, laudantium nulla tempore repellat
        pariatur nam magnam aspernatur vitae at impedit quas, velit iste dolor
        deserunt quaerat maxime accusamus totam ducimus id quo quod distinctio
        numquam. In similique est quos voluptate expedita odit autem earum ab
        veniam? Tempore nam beatae accusantium maxime reprehenderit, nesciunt
        dicta eius ipsum assumenda sunt aliquid quam sit totam eaque inventore
        sint odio ex alias doloremque voluptatem at quidem. Officia explicabo
        exercitationem fugiat molestias. Reiciendis voluptas impedit fugiat ad?
        Ipsam voluptatum dicta dolore esse tempore dignissimos error est quia
        ipsum cum? Maiores amet quod voluptatibus quis veniam exercitationem
        cupiditate laboriosam, dignissimos vitae laborum fugiat quidem ad
        impedit quos fuga deserunt voluptatum a beatae omnis soluta?
      </p>
    </>
  );
}
