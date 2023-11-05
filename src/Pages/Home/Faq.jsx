const Faq = () => {
  return (
    <div className="flex lg:w-3/4 md:w-4/5 flex-col mx-auto lg:flex-row justify-center items-center">
      <div className="flex-1">
        <img
          className="lg:h-[30rem]"
          src="https://i.ibb.co/MBbR9GC/Faq.png"
          alt=""
        />
      </div>
      <div className="flex-1 mx-auto">
        <p className="text-center pb-5 text-3xl font-bold underline  ">
          Have Any questions?{" "}
        </p>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I collaborate with multiple friends on a single assignment?
          </div>
          <div className="collapse-content">
            <p>
              Yes, you can! Assignment Buddy supports collaboration with
              multiple friends on a single assignment. This feature promotes
              teamwork and helps you tackle complex tasks with your study group.
              Simply invite your friends to the assignment, and you can all work
              on it together.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How do I provide feedback when grading my friends assignments?
          </div>
          <div className="collapse-content">
            <p>
              Grading your friends assignments is simple. You can use our
              built-in feedback tools to leave comments, suggestions, and
              ratings. This feature ensures that the feedback process is
              constructive and beneficial for both you and your friends,
              enhancing the learning experience.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Are there any tools for tracking our study progress and performance?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer progress-tracking tools. You can monitor your study
              progress, view completed assignments, and assess your growth over
              time. Our platform provides insights into your performance,
              helping you stay on top of your academic goals and achievements
              while studying with friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
