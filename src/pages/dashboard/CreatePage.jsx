import { useState } from "react";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [coverUrl, setCoverUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("title", title);
    data.append("price", price);
    data.append("cover", coverImage);
    console.log(title, price, coverImage);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setCoverUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h2>Create Menu</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex w-1/2 flex-col gap-5">
          <div className="flex-1 flex flex-col gap-5">
            <Input
              label="Menu Name"
              required={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              label="Price"
              required={true}
              value={price}
              type="number"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex-1  flex flex-col gap-2">
            <label className=" text-black font-medium">Cover</label>
            <div className="relative border rounded-md w-1/2 ">
              <>
                <Input
                  required={true}
                  type="file"
                  className="opacity-0 absolute w-ful h-full cursor-pointer z-20"
                  onChange={handleImageChange}
                />
                {coverImage ? (
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={`${coverUrl}`}
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover rounded-md opacity-30"
                    src={`https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18312.jpg?t=st=1721602809~exp=1721606409~hmac=a7a616a42543c1a2fa5a22a36453bc5f02075caf73da5a13f30f9c577a7c5fb0&w=740`}
                  />
                )}
              </>
            </div>
          </div>
          <Button className={"w-[20%] py-3"}>Create</Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
