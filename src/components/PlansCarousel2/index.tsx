import { Box, Stack } from "@chakra-ui/react";

import { dataPlains } from "../../utils/dataPlains";
import { PlansCard } from "../PlansCard";

let slides = dataPlains;

export default function PlansCarousel2() {
  return (
    <Box>
      <Stack
        display="grid"
        gridAutoFlow="column"
        scrollBehavior="auto"
        gap="2"
        overflowY="auto"
        overscrollBehaviorX="contain"
        scrollSnapType="x mandatory"
        overflow="hidden"
      >
        {slides.map((slide) => {
          return (
            <Stack>
              <PlansCard
                key={slide.id}
                id={slide.id}
                title={slide.title}
                value={slide.value}
                counter_user={slide.counter_user}
                benefits={slide.benefits}
              />
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
}
