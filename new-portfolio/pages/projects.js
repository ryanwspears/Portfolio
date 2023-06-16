import React, { useEffect, useState } from "react";
import Head from "next/head";
import projectStyles from "../styles/Project.module.css";
import Image from "next/image";
const contentful = require("contentful");

const Projects = () => {
  const [projs, setProjs] = useState();
  const [loading, setLoading] = useState(true);

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: "master",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  useEffect(() => {
    client
      .getEntries({
				content_type: "projects",
				order: "fields.id"
			})
      .then((data) => {
        setProjs(data)
        setLoading(false)
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <Head>
        <title>Ryan Spears - Projects</title>
      </Head>
      <div className={projectStyles.main}>
        {!loading && (
          <>
            {projs.items.map((proj) => {
              return (
                <div className={projectStyles.projectCard} key={proj.sys.id}>
                  <h3>{proj.fields.title}</h3>
                  <div className={projectStyles.cardBody}>
                    <Image
                      src={`https:${proj.fields.cover_image.fields.file.url}`}
                      alt={"cover-image"}
                      width={"500"}
                      height={"250"}
                    />
                    <h4>Description:</h4>
                    <p>{proj.fields.description}</p>
                    <h4>Technologies:</h4>
                    <p>{proj.fields.technologies}</p>
                    {proj.fields.link && (
                      <p>
                        View live site{" "}
                        <a
                          className={projectStyles.link}
                          href={proj.fields.link}
                          target={"_blank"}
                          rel={"noreferrer"}
                        >
                          here.
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
