import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { userId } = auth();
    const { isPublished, ...values } = await req.json();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const ownCourse = await prisma.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
    });

    if (!ownCourse) return new NextResponse("Unauthorized", { status: 401 });

    const chapter = await prisma.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        ...values,
      },
    });

    //TODO:Handle Video Upload

    return NextResponse.json(chapter);
  } catch (error) {
    console.log("[CHAPTERS_UPDATE]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}