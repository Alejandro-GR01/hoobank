import gsap from "gsap";

const Button = ({ styles }) => {
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".get-button");

    buttons.forEach((button) => {
      button.style.cursor = "pointer";

      button.addEventListener("click", () => {
        gsap
          .timeline()
          .to(button, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          })
          .to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
      });
    });
  });

  return (
    <button
      type="button"
      className={`get-button py-4 px-6 bg-blue-gradient font-medium  font-popins text-[18px] text-primary outline-none ${styles} rounded-[8px] cursor-pointer`}
    >
      Get Starter
    </button>
  );
};

export default Button;
