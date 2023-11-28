'use client';

import { WelcomePage } from "@/pageblock/WelcomePage/WelcomePage";
import { InView } from "react-intersection-observer";

export default function Home() {
    return (
        <div className="flex items-center justify-start md:p-0 flex-col">
            <WelcomePage />
            {/* TODO: Add Trigger once */}
            <InView threshold={0.50}>
                {({ inView, ref, entry }) => (
                    <div className={`flex p-16 transition-all duration-1000 h-[75dvh] ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-24'}`} ref={ref}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim blandit volutpat maecenas volutpat. Leo vel fringilla est ullamcorper eget nulla. Venenatis cras sed felis eget velit aliquet sagittis. Lectus arcu bibendum at varius vel pharetra. Tristique nulla aliquet enim tortor at auctor urna nunc. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Et malesuada fames ac turpis egestas sed tempus urna. Elit pellentesque habitant morbi tristique senectus et. Turpis tincidunt id aliquet risus feugiat in ante metus. Erat velit scelerisque in dictum non consectetur a erat nam. Ut eu sem integer vitae justo eget magna fermentum iaculis. A arcu cursus vitae congue mauris rhoncus aenean. Justo nec ultrices dui sapien eget mi proin sed libero. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Facilisis gravida neque convallis a cras semper auctor. In ante metus dictum at tempor commodo ullamcorper.
                            Donec ultrices tincidunt arcu non sodales neque. Quis imperdiet massa tincidunt nunc pulvinar. Neque aliquam vestibulum morbi blandit cursus risus. Volutpat odio facilisis mauris sit amet massa vitae tortor. Ornare arcu odio ut sem. Nullam non nisi est sit amet facilisis magna. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Blandit aliquam etiam erat velit scelerisque in dictum non. Facilisi cras fermentum odio eu feugiat pretium. Aliquam id diam maecenas ultricies mi. Ut morbi tincidunt augue interdum velit euismod in pellentesque.
                        </p>
                    </div>
                )}
            </InView >
        </div >
    )
}
