import FormComponents from "../components/FormComponents";

export default function EditPostPage() {
  return (
    <div className=" w-full h-4/5 absolute bottom-0 left-0">
      <div className="w-full h-full overflow-hidden overflow-y-scroll scroll-smooth">
        <FormComponents formTitle={"Edit Post Form"} apiComment={"EditPosts"}/>
      </div>
    </div>
  );
}
