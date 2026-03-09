export default function Profile() {
  return (
    <div className="flex flex-col items-center text-center mt-5">
      <img
        src="/foto.jpg"
        alt="foto de perfil"
        width="150"
        height="150"
        className="rounded-[30%] mb-4"
      />

      <h2 className="text-xl font-semibold mb-2">
        Alexandre Vitor Hilário
      </h2>

      <p className="max-w-md">
        Sou desenvolvedor web fullstack com interesse em backend e arquitetura
        de software. Gosto de trabalhar com Java, Node.js e React. Atualmente
        busco evoluir como engenheiro de software e trabalhar com projetos de
        maior escala.
      </p>
    </div>
  );
}