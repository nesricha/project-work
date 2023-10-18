type Props = {
  src: string;
  alt: string;
  className: string;
};

export default function ImageComponent(prop: Props) {
  return (
    <>
      <img
        src={prop.src ? prop.src : "/Image_not_available.png"}
        alt={prop.alt}
        className={prop.className}
        onError={({ currentTarget }) =>
          (currentTarget.src = "/Image_not_available.png")
        }
      />
    </>
  );
}
