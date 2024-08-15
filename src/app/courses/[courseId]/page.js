import { courseData } from "@/assets/data/homeData";
import Listings from "@/components/AllSection/Course/Listings";
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
      <Listings data={course?.learnings} title={"কোর্সটি করে যা শিখবেন"} />
      <Listings data={course?.courses_for} title={"কোর্সটি যাদের জন্য"} />
    </>
  );
};

export default page;
