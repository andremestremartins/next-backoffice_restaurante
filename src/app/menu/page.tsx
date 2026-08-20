import  Prato  from "@/components/Prato";
export default function Menu() {
  return (
    <>
    <div className="inputMenu">
      <input type="text" />
    </div>
    <Prato nome= {"Bife da Vazia"} preco = {26} id={1}/>
    </>
  );
}
