import { courseData } from "@/assets/data/homeData";
import CourseCollapse from "@/components/AllSection/Course/CourseCollapse";
import Listings from "@/components/AllSection/Course/Listings";
import SingleCourseBanner from "@/components/AllSection/Course/SingleCourseBanner";
import Courses from "@/components/AllSection/Home/Courses";

const page = async ({ params }) => {
  const { courseId } = params;

  const course = courseData?.find(
    (course) => course?.id === parseInt(courseId)
  );

  return (
    <>
      <SingleCourseBanner course={course} />
      <Listings data={course?.learnings} title={"কোর্সটি করে যা শিখবেন"} />
      {course?.curriculums &&
        course?.curriculums?.map((item, i) => (
          <CourseCollapse
            data={item}
            key={i}
            style={"grid grid-cols-1 sm:grid-cols-2"}
          />
        ))}
      <Listings data={course?.courses_for} title={"কোর্সটি যাদের জন্য"} />
      <CourseCollapse data={course?.faq[0]} style={"grid grid-cols-1"} />
      <Courses />
    </>
  );
};

export default page;
