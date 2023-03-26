import type { NextPage } from "next";
import {
  PencilIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Layout from "@/components/commons/layout";

const CommunityPage: NextPage = () => {
  return (
    <Layout hasTabBar title="동네생활">
      <div className="py-16 px-4 space-y-8">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i} className="flex flex-col items-start">
            <span className="flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              동네질문
            </span>
            <span className="top-23 text-gray-700">
              <span className="text-orange-500 font-medium">Q.</span> What is
              the best mandu restaurant?
            </span>
            <div className="mt-5 flex items-center justify-between w-full text-gray-500 font-xs ">
              <span>니꼬</span>
              <span>18시간 전</span>
            </div>
            <div className="flex space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px] w-full ">
              <span className="flex space-x-2 items-center text-sm">
                <CheckCircleIcon className="w-4 h-4" />
                <span>궁금해요 1</span>
              </span>
              <span className="flex space-x-2 items-center text-sm">
                <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4" />
                <span>답변 1</span>
              </span>
            </div>
          </div>
        ))}

        <button className="fixed hover:bg-orange-500 transition-colors bottom-24 right-5 bg-orange-400 rounded-full p-4 shadow-xl text-white  ">
          <PencilIcon className="w-6 h-6" />
        </button>
      </div>
    </Layout>
  );
};

export default CommunityPage;
