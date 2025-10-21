import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const PostDate = ({ createdAt }) => {
  return <span>{dayjs(createdAt).fromNow()}</span>;
};

export default PostDate;
