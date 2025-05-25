import FixedButton from "../common/FixedButton";

export default function Main({
  setStartDiagnosis,
}: {
  setStartDiagnosis: (startDiagnosis: boolean) => void;
}) {
  return (
    <>
      <section className="w-full aspect-[393/281] sm:aspect-[1280/315]">
        <img
          src={`${import.meta.env.BASE_URL}LP/FV_PC.png`}
          alt="LP"
          className="w-full h-full object-cover hidden sm:block"
        />
        <img
          src={`${import.meta.env.BASE_URL}LP/FV_SP.png`}
          alt="LP"
          className="w-full h-full object-cover sm:hidden"
        />
      </section>
      <FixedButton onClick={() => setStartDiagnosis(true)} showGlassIcon>
        診断スタート
      </FixedButton>
    </>
  );
}
