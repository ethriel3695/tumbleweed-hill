import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import TextOnlyCard from 'gatsby-theme-contentful/src/components/Card/TextOnlyCard';
import Button from 'gatsby-theme-contentful/src/components/Button/Button';
import Carousel from 'gatsby-theme-contentful/src/components/Carousel/Carousel';

const HeroLanding = ({ page }) => {
  return (
    <div className="bg-gray-0">
      <div>
        <div>
          {page.section.map((sect, index) => {
            return (
              <div key={index}>
                <div>
                  {sect.image ? (
                    <div className="max-w-full">
                      <Image fluid={sect.image.fluid} />
                    </div>
                  ) : null}
                  {sect.gallery && sect.slug === 'hero' ? (
                    <Carousel images={sect.gallery} />
                  ) : null}
                  <div className="container">
                    <h2 className="text-left py-8" key={`${sect.title}`}>
                      {sect.title}
                    </h2>
                    {sect.description && (
                      <p className="text-lg text-gray-800 text-left mb-2">
                        {documentToReactComponents(
                          sect.description.json,
                          // , {
                          // renderNode: {
                          //   [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
                          //     <img
                          //       src={`${node.data.target.fields.file['en-US'].url}?w=300`}
                          //       src={node.data.target.fields.title['en-US']}
                          //     />
                          //   ),
                          // },
                          // }
                        )}
                      </p>
                    )}
                    <div>
                      <div className="flex flex-wrap lg:flex-row flex-col">
                        {sect.product &&
                          sect.product.map((sec, index) => {
                            return (
                              <TextOnlyCard key={`card-${index}`}>
                                <div
                                  className="font-bold text-xl mb-5"
                                  key={`${sec.title}`}
                                >
                                  {sec.title}
                                </div>
                                <p
                                  className="my-4 text-base text-gray-700 whitespace-pre-line"
                                  key={`${sec.description}`}
                                >
                                  {sec.description.description}
                                </p>
                                <p
                                  className="text-gray-700 text-base"
                                  key={`${sec.price}`}
                                >
                                  {' '}
                                  {(sec.price && `$${sec.price}`) ||
                                    'Contact Us For Pricing Details'}
                                </p>
                              </TextOnlyCard>
                            );
                          })}
                      </div>
                    </div>
                    <div className="text-center text-xl">
                      {sect.item &&
                        sect.item.map((sec, index) => {
                          return (
                            <Button key={`${sec.title}-${index}`}>
                              {sec.link ? (
                                <a
                                  className={' no-underline'}
                                  href={sec.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {sec.title}
                                </a>
                              ) : (
                                <Link
                                  className={' no-underline'}
                                  to={`/${sec.slug}`}
                                >
                                  {sec.title}
                                </Link>
                              )}
                            </Button>
                          );
                        })}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {sect.gallery &&
                        sect.slug !== 'hero' &&
                        sect.gallery.map((gal, index) => {
                          return (
                            <div
                              key={`galleryContainer-${index}`}
                              className="col-span-12 lg:col-span-1"
                            >
                              {gal.description ? (
                                <div
                                  key={`gallery-${index}`}
                                  className="p-3 md:p-6 shadow-lg rounded-md overflow-hidden"
                                >
                                  {gal.fluid && <Image fluid={gal.fluid} />}
                                  <h3>{gal.title}</h3>
                                  <div>{gal.description}</div>
                                </div>
                              ) : (
                                <div
                                  key={`gallery-${index}`}
                                  className="p-3 md:p-6 shadow-lg rounded-md overflow-hidden"
                                >
                                  {gal.fluid && <Image fluid={gal.fluid} />}
                                </div>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroLanding;
