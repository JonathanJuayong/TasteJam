import Container from "@/components/layout/Container";
import Stack from "@/components/layout/Stack";
import Inline from "@/components/layout/Inline";
import {Skeleton} from "@/components/ui/skeleton";

interface LoadingProps {
}

export default function Loading({}: LoadingProps) {
  return (
    <Container className="py-5">
      {/*<div className="flex items-center space-x-4">*/}
      {/*  <Skeleton className="h-12 w-12 rounded-full" />*/}
      {/*  <div className="space-y-2">*/}
      {/*    <Skeleton className="h-4 w-[250px]" />*/}
      {/*    <Skeleton className="h-4 w-[200px]" />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <Stack className="gap-8">
        <Inline justify="stretch" align="center" className="gap-5">
          <Skeleton className="h-10 w-10 rounded-full"/>
          <Stack className="gap-2">
            <Skeleton className="h-3 w-40"/>
            <Skeleton className="h-3 w-80"/>
            <Skeleton className="h-3 w-36"/>
          </Stack>
        </Inline>
        <Inline justify="stretch" align="center" className="gap-5">
          <Skeleton className="h-10 w-10 rounded-full"/>
          <Stack className="gap-2">
            <Skeleton className="h-3 w-40"/>
            <Skeleton className="h-3 w-80"/>
            <Skeleton className="h-3 w-36"/>
          </Stack>
        </Inline>
        <Inline justify="stretch" align="center" className="gap-5">
          <Skeleton className="h-10 w-10 rounded-full"/>
          <Stack className="gap-2">
            <Skeleton className="h-3 w-40"/>
            <Skeleton className="h-3 w-80"/>
            <Skeleton className="h-3 w-36"/>
          </Stack>
        </Inline>
        <Inline justify="stretch" align="center" className="gap-5">
          <Skeleton className="h-10 w-10 rounded-full"/>
          <Stack className="gap-2">
            <Skeleton className="h-3 w-40"/>
            <Skeleton className="h-3 w-80"/>
            <Skeleton className="h-3 w-36"/>
          </Stack>
        </Inline>
        <Inline justify="stretch" align="center" className="gap-5">
          <Skeleton className="h-10 w-10 rounded-full"/>
          <Stack className="gap-2">
            <Skeleton className="h-3 w-40"/>
            <Skeleton className="h-3 w-80"/>
            <Skeleton className="h-3 w-36"/>
          </Stack>
        </Inline>
        <Inline justify="stretch" align="center" className="gap-5">
          <Skeleton className="h-10 w-10 rounded-full"/>
          <Stack className="gap-2">
            <Skeleton className="h-3 w-40"/>
            <Skeleton className="h-3 w-80"/>
            <Skeleton className="h-3 w-36"/>
          </Stack>
        </Inline>
        <Inline justify="stretch" align="center" className="gap-5">
          <Skeleton className="h-10 w-10 rounded-full"/>
          <Stack className="gap-2">
            <Skeleton className="h-3 w-40"/>
            <Skeleton className="h-3 w-80"/>
            <Skeleton className="h-3 w-36"/>
          </Stack>
        </Inline>
        <Inline justify="stretch" align="center" className="gap-5">
          <Skeleton className="h-10 w-10 rounded-full"/>
          <Stack className="gap-2">
            <Skeleton className="h-3 w-40"/>
            <Skeleton className="h-3 w-80"/>
            <Skeleton className="h-3 w-36"/>
          </Stack>
        </Inline>
      </Stack>
    </Container>
  )
}
