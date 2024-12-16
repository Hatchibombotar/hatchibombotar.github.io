import { createSignal } from "solid-js";
import skills from "../data/skills";

export default function SkillIcons() {
    return <div class="grid xs:grid-cols-2 sm:grid-cols-3">
        {
            skills.map((skill) => {
                const [lightsOn, setLightsOn] = createSignal(false)
                function toggleLights() {
                    setLightsOn(!lightsOn())
                    if (lightsOn()) {
                        const click = new Audio('sound/switch1.mp3');
                        click.play()
                    } else {
                        const click = new Audio('sound/switch2.mp3');
                        click.play()
                    }
                }
                return <button
                    class="flex xs:justify-normal justify-center items-center m-2 text-left"
                    onClick={() => toggleLights()}
                >
                    <div
                        class="transition duration-[0.1s] ease-[cubic-bezier(1,1,0,0)]"
                        classList={{
                            "brightness-[0.2]": !lightsOn() && skill.iconType != "image",
                            "grayscale": !lightsOn()
                        }}
                    >
                        {skill.iconType == "image" ? (
                            <div class="mx-2 flex items-center">
                                <img
                                    width={25}
                                    src={skill.icon as string}
                                    alt={`skill icon for ${skill.name}`}
                                />
                            </div>
                        ) : (
                            <div
                                style={{ "--colour": skill.colour }}
                                class="mx-2 flex items-center fill-[var(--colour)]"
                            >
                                <skill.icon size={25} class="fill-inherit" />
                            </div>
                        )}
                    </div>
                    <span>{skill.name}</span>
                </button>
            })
        }
    </div>
}