import { StyledNoteBody, StyledNoteTitle, StyledNote } from "./styles";

const Note = () => {
    return (
        <StyledNote>
            <StyledNoteTitle value={"Testowa notatka"} />
            <StyledNoteBody value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum iste earum corrupti amet facere voluptatem dolores aperiam, nobis pariatur ducimus modi cumque expedita ullam, fugit reprehenderit natus in qui?" />
        </StyledNote>
    );
};

export default Note;
