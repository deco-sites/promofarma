interface Props {
  title?: string;
  fontSize?: "Normal" | "Large" | "Small";
  description?: string;
  alignment: "center" | "left";
  colorReverse?: boolean;
}

function Header(props: Props) {
  return (
    <>
      {props.title || props.description
        ? (
          <div
            class={`flex flex-col gap-2 ${
              props.alignment === "left" ? "text-left" : "text-center"
            }`}
          >
            {props.title &&
              (
                <h1
                  class={`text-2xl leading-8 lg:leading-10
                  ${
                    props.colorReverse
                      ? "text-primary-content"
                      : "text-base-content"
                  }
                  ${
                    props.fontSize === "Normal"
                      ? "lg:text-3xl"
                      : props.fontSize === "Large"
                        ? "lg:text-4xl"
                        : "text-2xl"
                  }
                  ${
                    props.alignment === 'left' ? 'font-bold' : ''
                  }
                `}
                >
                  {props.title}
                </h1>
              )}
            {props.description &&
              (
                <h2
                  class={`
                  leading-6 lg:leading-8
                  ${
                    props.colorReverse ? "text-primary-content" : "text-neutral"
                  }
                  ${
                    props.fontSize === "Normal"
                      ? "lg:text-xl"
                      : props.fontSize === "Large"
                        ? "lg:text-2xl"
                        : "text-base"
                  }
                `}
                >
                  {props.description}
                </h2>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default Header;
