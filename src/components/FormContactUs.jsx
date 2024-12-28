export default function FormContactUs() {
  return (
    <>
      <form
        className="flex flex-col bg-slate-400 p-10 rounded-[50px]"
        action=""
      >
        <input
          className="input input-bordered flex  gap-2 mb-2 w-96"
          type="text"
          placeholder="Email"
        />
        <input
          className="input input-bordered flex gap-2 mb-2 w-96"
          type="text"
          placeholder="Object"
        />
        <textarea
          className="textarea textarea-bordered gap-2 mb-2 w-96 h-40"
          name=""
          id=""
          placeholder="Message"
        ></textarea>
        <a className="mb-2" href="">
          Captcha
        </a>
        <div className="flex justify-center">
          <button
            className="btn btn-active  rounded-full pl-9 pr-9"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
}
