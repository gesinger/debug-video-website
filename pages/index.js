import NavBar from '../components/NavBar';
import StreamingMediaViz from '../components/StreamingMediaViz';
import LandingSection from '../components/LandingSection';
import Carousel from '../components/Carousel';
import FeaturesBox from '../components/FeaturesBox';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <div className="header">
          <div>
            <div className="header-text-container">
              <h2>Spend less time debugging <span className="highlight-color">video</span></h2>
              <div className="mt-12">
                <p><span className="font-bold">Debugging HLS and DASH streams is time consuming.</span> It involves refreshing manifests, downloading segments, concatenating those segments with init segments, and countless runs of ffprobe.</p>
                <p className="mt-6"><span className="font-bold">debug.video</span> does the tedious work for you. So you can get back to making the world of streaming media better.</p>
              </div>
            </div>
          </div>
          <div className="header-viz-container">
            <StreamingMediaViz />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <a
          className="download-button mt-8 sm:mt-16"
          href="https://github.com/gesinger/debug-video#downloading-and-installing"
        >
          Skip the rest and download!
        </a>
        <hr className="landing-divisor" />
        <div className="landing-section">
          <h2 className="mb-8">
            See what <span className="highlight-color">debug.video</span> can do with...
          </h2>
          <div className="flex flex-col">
            <FeaturesBox
              type="Manifests"
              href="#manifests"
              extensions={['m3u8', 'mpd']}
            />
            <FeaturesBox
              type="Segments"
              href="#segments"
              extensions={['ts', 'mp4', 'm4s', 'm4f', 'm4v', 'm4a']}
            />
            <FeaturesBox type="Websites" href="#websites" />
            <FeaturesBox
              type="Archives"
              href="#archives"
              extensions={['har', 'dbgvid']}
            />
          </div>
        </div>
        <hr className="landing-divisor" />
        <a name="manifests" />
        <div className="landing-section">
          <h2>Manifests</h2>
          <Carousel
            items={[
              {
                header: (
                  <div>
                    Click to navigate <span className="highlight-color">HLS</span> and <span className="highlight-color">DASH</span>
                  </div>
                ),
                subHeader: (
                  <div>Open variant manifests, download segments, and see errors.</div>
                ),
                image: {
                  src: '/images/hls-main.png',
                  alt: 'image of HLS main manifest view',
                }
              },
              {
                header: (
                  <div>
                    How do you click a <span className="highlight-color">DASH</span> segment?
                  </div>
                ),
                subHeader: (
                  <div>
                    Representations are converted into lists of segments to make navigation easier.
                  </div>
                ),
                image: {
                 src: '/images/dash-main.png',
                 alt: 'image of DASH manifest view',
                },
              },
              {
                header: (<div>Refresh automatically</div>),
                subHeader: (
                  <div>
                    Have a live stream? Or a VOD that keeps changing? debug.video can refresh manifests at any interval.
                  </div>
                ),
                image: {
                 src: '/images/manifest-refresh.png',
                 alt: 'image of manifest refresh',
                },
              },
              {
                header: (<div>Can I compare those refreshes?</div>),
                subHeader: (
                  <div>
                    Of course! Select any two manifests and view a diff between them.
                  </div>
                ),
                image: {
                 src: '/images/manifest-diff.png',
                 alt: 'image of manifest diff',
                },
              },
            ]}
          />
        </div>

        <hr className="landing-divisor" />

        <a name="segments" />
        <div className="landing-section mt-12">
          <h2>Segments</h2>
          <Carousel
            items={[
              {
                header: (<div>No more running ffprobe</div>),
                subHeader: (
                  <div>
                    Segments are downloaded and processed by ffprobe and mp4box so you can
                    view the most important information without entering the terminal.
                  </div>
                ),
                image: {
                  src: '/images/segments.png',
                  alt: 'image of segments view',
                }
              },
              {
                header: (<div>Spot gaps within segments</div>),
                subHeader: (
                  <div>
                    A visualization of frame times can quickly tell you if there's a gap
                    any larger than a frame duration.
                  </div>
                ),
                image: {
                  src: '/images/segment-gaps.png',
                  alt: 'image of segment gaps view',
                }
              },
              {
                header: (<div>See inside MP4s</div>),
                subHeader: (<div>A tree shows all of an MP4's boxes.</div>),
                image: {
                  src: '/images/mp4-boxes.png',
                  alt: 'image of mp4 segment boxes',
                }
              },
              {
                header: (<div>Visualize segment times</div>),
                subHeader: (
                  <div>
                    Select segments easier with an interactive timeline.
                  </div>
                ),
                image: {
                  src: '/images/segments-timeline.png',
                  alt: 'image of segments timeline view',
                }
              },
            ]}
          />
        </div>

        <hr className="landing-divisor" />

        <a name="websites" />
        <div className="landing-section mt-12">
          <h2>Websites</h2>
          <Carousel
            items={[
              {
                header: (<div>Using MSE on a web page?</div>),
                subHeader: (
                  <div>
                    <span className="highlight-text">debug.video</span> can capture those
                    appends.
                  </div>
                ),
                image: {
                  src: '/images/appends.png',
                  alt: 'image of appends view',
                }
              },
            ]}
          />
        </div>

        <hr className="landing-divisor" />

        <a name="archives" />
        <div className="landing-section mt-12">
          <h2>Archives</h2>
          <div className="mx-12 flex flex-col sm:flex-row sm:space-x-16">
            <div className="basis-1/2 p-4">
              <h3 className="highlight-color">HAR</h3>
              <div className="mt-8">
                Someone sent you a HAR file? Great! Any manifests and segments will be
                detected, probed, and displayed.
              </div>
            </div>
            <div className="basis-1/2 p-4">
              <h3>Import and Export <span className="highlight-color">.dbgvid</span></h3>
              <div className="mt-8">
                Want to send your session to someone else? Export it as
                a <span className="highlight-color">.dbgvid</span> archive.
              </div>
            </div>
          </div>
        </div>

        <hr className="landing-divisor" />

        <a name="missing-features" />
        <div className="landing-section mt-12">
          <h2 className="mb-8">Missing Features</h2>
          <div className="mx-12">
            <p>
              There's plenty more debug.video can do, and it's open source. Contributions are appreciated!
            </p>
            <ul className="mt-8 missing-features-list">
              <li>
                Tests
                <span className="parenthetical">
                  (but at least the main branch isn't failing)
                </span>
              </li>
              <li>
                Plenty of DASH options
                <span className="parenthetical">(there are so many)</span>
              </li>
              <li>
                Support for more streams
                <span className="parenthetical">
                  (if your stream fails, please <a href="https://github.com/gesinger/debug-video/issues/new">report it</a>)
                </span>
              </li>
              <li>
                Windows build
                <span className="parenthetical">
                  (contributions from Windows machine owners are appreciated!)
                </span>
              </li>
              <li>A whole lot more</li>
            </ul>
          </div>
        </div>

        <hr className="landing-divisor" />

        <a name="testimonials" />
        <div className="landing-section mt-12">
          <div className="flex justify-center">
             <img
              className="rounded-full"
              src="/images/glitched-big-buck-bunny.png"
              alt="image of glitched big buck bunny"
              width={150}
              height={150}
            />
              <div className="ml-8">
                <p className="font-bold text-5xl">
                  "It's great."
                </p>
                <p className="mt-4 text-right"> - Glitched Big Buck Bunny</p>
              </div>
          </div>
        </div>

        <hr className="landing-divisor" />

        <div className="landing-section mt-12 mb-12 flex items-center">
          <a
            className="download-button"
            href="https://github.com/gesinger/debug-video#downloading-and-installing"
          >
            Ready to check it out yourself?
          </a>
        </div>
      </div>
    </div>
  )
}
