import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


const GameCardSkeleton = () => {
  return (
    <Card width={'300px'} borderRadius={10} overflow={'hidden'} border={'1px solid white'}>
        <Skeleton height={'300px'}/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton