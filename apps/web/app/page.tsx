import {prisma} from "@repo/db/client";
import styles from "./page.module.css";

export default async function Home() {
  const user = await prisma.user.findFirst();
  return (
    <div className={styles.page}>
      {user?.name}
      {user?.email}
    </div>
  );
}
