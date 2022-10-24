import { TextCard } from "components/TextCard/TextCard";

export function NoteBrowse(props) {
  return (
    <>
      <TextCard
        title="Super note"
        subtitle="01/01/2022"
        content="Blabla bla Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla Blabla bla Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla Blabla bla Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla Blabla bla Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla Blabla bla Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla Blabla bla Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla"
        onClick={() => alert("OnClick !")}
        onClickTrash={() => alert("OnClickTrash !")}
      />
    </>
  );
}
