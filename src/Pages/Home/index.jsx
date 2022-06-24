import React from "react";
import Tasks from "../../Components/TasksCard";
import styles from "../../Styles/page/home.module.css";
export const Home = () => {
  return (
    <section>
      <div className={styles["content_main"]}>
        <div className={styles["title_home"]}>
          <h1>Always live young. Get ready to become something better!!</h1>
        </div>
        <div className={styles["gallery_content"]}>
          <div />
          <div className={styles["card-galleryOne"]}>
            <div />
            <div className={styles["back-content"]} />
            <div className={styles["info-content"]}>
              <h1>Remember the good times...</h1>
              <button>Click this</button>
            </div>
          </div>
        </div>

        <div className={styles["Tasks-content"]}>
          <div className={styles["title_tasks"]}>
            <h1>Let's remember what you have to do:</h1>
          </div>
          {/* ? Task inport from "Component/Task" */}
          <Tasks />
        </div>
      </div>
    </section>
  )
};
