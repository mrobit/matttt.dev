import classNames from "classnames";

export default function MailIcon({ className }) {
  const classes = classNames("fill-current", className);
  
  return (
    <svg className={classes} height="1200" viewBox="0 0 1200 1200" width="1200" xmlns="http://www.w3.org/2000/svg"><path d="m343.06 388.4c-8.8633 0-17.117 2.4844-24.09 6.8477l258.83 225.3c13.734 11.945 30.168 11.945 43.926 0l259.3-225.3c-6.9688-4.3633-15.223-6.8477-24.086-6.8477zm-42.746 30.699c-1.5703 4.6094-2.5977 9.4883-2.5977 14.645v332.52c0 25.121 20.223 45.344 45.344 45.344h513.89c25.121 0 45.344-20.223 45.344-45.344v-332.52c0-5.1562-1.0273-10.031-2.5977-14.641l-258.12 224.11c-24.066 20.898-59.539 20.93-83.602 0z" /></svg>
  )
}