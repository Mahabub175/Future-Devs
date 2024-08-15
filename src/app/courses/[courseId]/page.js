import { courseData } from "@/assets/data/homeData";
import SingleCourseBanner from "@/components/AllSection/Course/SingleCourseBanner";

const page = async ({ params }) => {
  const { courseId } = params;

  const course = courseData?.find(
    (course) => course?.id === parseInt(courseId)
  );

  console.log(course);

  return (
    <>
      <SingleCourseBanner course={course} />
    </>
  );
};

export default page;
