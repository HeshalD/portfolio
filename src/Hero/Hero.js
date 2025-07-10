import React from 'react'
import GridDistortion from '../Backgrounds/GridDistortion/GridDistortion';
import RotatingText from '../TextAnimations/RotatingText/RotatingText'

function Hero() {
    return (
        <div>
            <div style={{ width: '100%', height: '800px', position: 'relative' }}>
                <GridDistortion
                    imageSrc="./BackgroundImages/heroBackground.jpg"
                    grid={10}
                    mouse={0.1}
                    strength={0.15}
                    relaxation={0.9}
                    className="custom-class"
                />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    zIndex: 1,
                    textAlign: 'center'
                }}>
                    <h1 className="font-gilroyBold text-[80px] text-shadow-lg bg-defaultBlack p-[10px] px-[15px]">
                        Heshal Dissanayake
                    </h1>

                    <div className='flex justify-center'>
                    <RotatingText
                        texts={['DEVELOPER', 'DESIGNER', 'CREATER']}
                        mainClassName="mt-[50px] sm:px-2 md:px-3 bg-defaultBlack text-defaultWhite w-[200px] text-gilroyHeavy text-[30px] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center "
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={4000}
                    />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero