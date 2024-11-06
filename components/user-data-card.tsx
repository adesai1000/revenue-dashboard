/* eslint-disable @next/next/no-img-element */
export type userDataProps = {
  name: string;
  email: string;
  image: string;
  time: string;
};
export default function UserDataCard(props: userDataProps) {
  // This is a placeholder image for the event when a user does not have a profile Image.
  const defaultProfileImage = "./mesh.jpeg";
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full">
          <img
            width={300}
            height={300}
            src={props.image || defaultProfileImage}
            alt="Profile Image"
            className="rounded-full h-12 w-12"
          />
        </div>
        <div className="text-sm">
          <p>{props.name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto opacity-30">
            {props.email}
          </div>
        </div>
      </section>
      <p className="text-sm">{props.time}</p>
    </div>
  );
}
