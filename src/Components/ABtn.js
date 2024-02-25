function ABtn({ href }) {
  return (
    <div>
      <a
        className="float-right px-2 py-1 mt-2 mb-4 text-xs text-white bg-red-600 rounded-md"
        href={href}
        target="_black"
      >
        Read More
      </a>
    </div>
  );
}

export default ABtn;
